import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyTerms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy and Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At Modern Matrimony, we take your privacy seriously. We collect and use your personal information to provide
          and improve our matchmaking services. We do not sell or share your information with third parties without your
          explicit consent.
        </p>
        <p className="mb-4">
          You have control over your data and can request to view, edit, or delete your information at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="mb-4">
          By using Modern Matrimony, you agree to our terms of service. These terms include guidelines for appropriate
          behavior, content policies, and your rights and responsibilities as a user of our platform.
        </p>
        <p className="mb-4">
          We reserve the right to suspend or terminate accounts that violate our terms or engage in harmful behavior.
        </p>
      </section>

      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}

