data "cloudflare_zone" "primary" {
  zone_id = var.cloudflare_zone_id
}

resource "cloudflare_record" "apex" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  value   = cloudflare_pages_project.portfolio.subdomain
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = cloudflare_pages_domain.portfolio_domain.domain
  type    = "CNAME"
  proxied = true
}

