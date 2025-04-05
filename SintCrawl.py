import requests
import re
from bs4 import BeautifulSoup
from colorama import Fore, Style, init
from urllib.parse import urljoin, urlparse
import random

init()

visited_links = set()
emails = set()
subdomains = set()
images = set()

def extract_emails(text):
    """ Extrait les adresses e-mail d'une page web """
    email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    found_emails = re.findall(email_pattern, text)
    for email in found_emails:
        emails.add(email)

def extract_subdomains(url):
    """ Extrait les sous-domaines d'une URL """
    parsed_url = urlparse(url)
    domain = parsed_url.netloc
    if domain and domain not in subdomains:
        subdomains.add(domain)

def extract_images(soup, base_url):
    """ Extrait les URLs des images d'une page web """
    for img_tag in soup.find_all("img", src=True):
        img_url = img_tag["src"]
        full_img_url = urljoin(base_url, img_url)
        images.add(full_img_url)

def get_random_color():
    """ Renvoie une couleur aléatoire parmi les couleurs définies dans Colorama """
    colors = [Fore.GREEN, Fore.CYAN, Fore.YELLOW, Fore.RED, Fore.MAGENTA, Fore.WHITE]
    return random.choice(colors)

def crawl(url, depth=2):
    """ Crawler récursif du site web """
    if depth == 0 or url in visited_links:
        return
    
    print(f"{get_random_color()}🔍 Crawling : {url}{Style.RESET_ALL}")
    visited_links.add(url)

    try:
        response = requests.get(url, timeout=5, headers={"User-Agent": "Mozilla/5.0"})
        if response.status_code != 200:
            return

        soup = BeautifulSoup(response.text, "html.parser")

        extract_emails(response.text)
        extract_subdomains(url)

        extract_images(soup, url)

        for link in soup.find_all("a", href=True):
            href = link["href"]
            full_url = urljoin(url, href)
            
            if urlparse(full_url).netloc == urlparse(url).netloc:
                crawl(full_url, depth - 1)

    except requests.RequestException:
        pass

target_url = input(f"{Fore.YELLOW}✨️ Entrez l'URL cible : {Style.RESET_ALL}")
crawl(target_url)

print("\n📂 Résultats :")
print(f"{get_random_color()}🔗 Liens visités ({len(visited_links)}) :{Style.RESET_ALL}")
for link in visited_links:
    print(f"{get_random_color()} - {link}{Style.RESET_ALL}")

print(f"\n📧 E-mails trouvés ({len(emails)}) :")
for email in emails:
    print(f"{get_random_color()} - {email}{Style.RESET_ALL}")

print(f"\n🌐 Sous-domaines détectés ({len(subdomains)}) :")
for sub in subdomains:
    print(f"{get_random_color()} - {sub}{Style.RESET_ALL}")

print(f"\n🖼️ URLs des images trouvées ({len(images)}) :")
for img_url in images:
    print(f"{get_random_color()} - {img_url}{Style.RESET_ALL}")

input(f"{Fore.YELLOW}Appuyez sur Enter pour quitter...{Style.RESET_ALL}")