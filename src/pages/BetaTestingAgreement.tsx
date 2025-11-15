const lastUpdated = "November 15, 2025";

const BetaTestingAgreement = () => {
  return (
    <div className="bg-muted/20 py-16">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">Beta Program</p>
          <h1 className="text-4xl font-bold text-primary">Rewardz Beta Testing Agreement</h1>
          <p className="text-muted-foreground">Effective Date: {lastUpdated}</p>
          <p className="text-lg text-muted-foreground">
            The Beta Program allows early access to unreleased Rewardz features in exchange for product feedback.
            Participation is voluntary but subject to the commitments outlined below.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">1. Confidentiality</h2>
          <p className="text-muted-foreground">
            Certain pre-release features, metrics, or communications may be confidential. You agree not to share
            screenshots, APKs/IPAs, or technical information outside approved feedback channels without our consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">2. Feedback License</h2>
          <p className="text-muted-foreground">
            You grant Rewardz a perpetual, irrevocable, royalty-free license to use feedback you share (ideas,
            bug reports, surveys) for product development without obligation to you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">3. Experimental Features</h2>
          <p className="text-muted-foreground">
            Beta builds may contain experimental capabilities that could fail, lose data, or impact device battery.
            Install only on devices where such risks are acceptable, and always maintain backups of important data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">4. Updates & Termination</h2>
          <p className="text-muted-foreground">
            We may push frequent updates or revoke access at any time. You may exit the program by uninstalling the
            beta app and contacting support to revert to public releases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">5. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            Participation is “as is” and without warranties. Rewardz is not liable for damages arising from beta
            use, including loss of data or service interruptions, to the maximum extent permitted by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">6. Contact</h2>
          <p className="text-muted-foreground">
            Questions about the beta program? Email{" "}
            <a className="text-primary underline" href="mailto:beta@rewardzapp.com">
              beta@rewardzapp.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default BetaTestingAgreement;

