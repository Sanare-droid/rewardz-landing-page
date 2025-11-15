const lastUpdated = "November 15, 2025";

const TermsOfUse = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">Legal</p>
          <h1 className="text-4xl font-bold text-primary">Rewardz Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          <p className="text-lg text-muted-foreground">
            These Terms of Use (“Terms”) govern access to and use of the Rewardz website, mobile applications,
            and related services (“Services”). By downloading or using Rewardz, you agree to these Terms.
            If you do not agree, please uninstall the App and discontinue all use.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">1. Eligibility & Accounts</h2>
          <p className="text-muted-foreground">
            You must be at least 13 years old to create an account. When registering, you agree to provide
            accurate, current information and to keep your credentials secure. You are responsible for all
            activity that occurs under your account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">2. Acceptable Use</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Use Rewardz only for lawful purposes related to pet safety and recovery.</li>
            <li>Do not submit false alerts, spam other users, or misuse communication features.</li>
            <li>Do not attempt to probe, scan, or test the vulnerability of the platform.</li>
            <li>Respect intellectual property, privacy, and publicity rights of others.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">3. User Content & Licenses</h2>
          <p className="text-muted-foreground">
            You retain ownership of information you submit (pet photos, descriptions, messages). By posting,
            you grant Rewardz a worldwide, non-exclusive, royalty-free license to host, store, display, and
            share that content solely to operate and improve the Services.
          </p>
          <p className="text-muted-foreground">
            You confirm you have the necessary rights to the content you upload and that it does not infringe
            any third-party rights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">4. Beta Software & Updates</h2>
          <p className="text-muted-foreground">
            Rewardz is currently in beta. Features may change, and the Services may be unavailable without notice.
            We may push automatic updates to improve safety and performance. Continued use after updates
            constitutes acceptance of the revised Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">5. Disclaimers</h2>
          <p className="text-muted-foreground">
            Rewardz is provided “as is” and “as available.” We make no warranties regarding accuracy of alert
            data, response times, or successful recovery outcomes. You are solely responsible for evaluating
            and acting upon any alert or communication received through the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">6. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, Rewardz shall not be liable for indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or data. Our total liability
            for any claim related to the Services will not exceed one hundred U.S. dollars ($100).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">7. Termination</h2>
          <p className="text-muted-foreground">
            We may suspend or terminate access if you breach these Terms or engage in activities that threaten
            community safety. You may stop using Rewardz at any time. Sections intended to survive (e.g.,
            intellectual property, disclaimers, limitation of liability) will remain in effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">8. Governing Law & Disputes</h2>
          <p className="text-muted-foreground">
            These Terms are governed by the laws of the State of Texas, USA, without regard to conflict of laws.
            Any disputes will be resolved exclusively in state or federal courts located in Travis County, Texas,
            unless prohibited by local law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">9. Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms to reflect new features, legal requirements, or security practices. We will
            post the revised Terms with an updated date and, when appropriate, notify you via email or in-app
            notice. Continued use after changes indicates acceptance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">10. Contact</h2>
          <p className="text-muted-foreground">
            Questions about these Terms? Contact us at{" "}
            <a className="text-primary underline" href="mailto:legal@rewardzapp.com">
              legal@rewardzapp.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;

