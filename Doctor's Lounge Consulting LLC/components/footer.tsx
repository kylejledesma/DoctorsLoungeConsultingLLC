import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MedConsult Pro</h3>
            <p className="text-sm text-muted-foreground">
              Expert medical application consulting by a dermatology resident
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Services</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Application Review
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Interview Preparation
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Residency Consulting
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Success Stories
              </Link>
              <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Student Reviews
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Get Started</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                Submit Application
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 MedConsult Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
