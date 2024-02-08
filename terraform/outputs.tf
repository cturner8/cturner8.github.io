
output "cloudflare_pages_domains" {
  value = cloudflare_pages_project.portfolio.domains
}


output "cloudflare_pages_subdomain" {
  value = cloudflare_pages_project.portfolio.subdomain
}

output "portfolio_domain" {
  value = cloudflare_pages_domain.portfolio_domain.domain
}
