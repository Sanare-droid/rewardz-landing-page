const lastUpdated = "November 15, 2025";

const PrivacyPolicy = () => {
  return (
    <div className="bg-muted/30 py-16">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">Privacy Policy</p>
          <h1 className="text-4xl font-bold text-primary">Rewardz Pet Recovery App</h1>
          <p className="text-muted-foreground">
            Effective Date: {lastUpdated}
          </p>
          <p className="text-lg text-muted-foreground">
            Rewardz (“we,” “us,” “our”) operates the Rewardz Pet Recovery mobile and web application (“App”).
            This policy explains how we collect, use, disclose, and safeguard personal information so you can
            confidently use our pet safety tools and comply with app marketplace requirements.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
          <p>We only collect information needed to provide the Rewardz experience:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Account & Profile:</strong> Name, email, phone number, password, and profile photo.</li>
            <li><strong>Pet Recovery Data:</strong> Pet names, descriptions, photos, identification numbers, and alert details.</li>
            <li><strong>Location Data:</strong> GPS coordinates (only when you allow location access) to map lost pet alerts and notify nearby helpers.</li>
            <li><strong>Usage & Device:</strong> App interactions, crash logs, device model, operating system, and analytics for reliability and optimization.</li>
            <li><strong>Communications:</strong> Support messages, alert broadcasts, and community chat history needed to process your requests.</li>
          </ul>
          <p className="text-muted-foreground">
            You can refuse certain permissions in your device settings, but some features may be limited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. How We Use Information</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Operate core features such as account management, pet profiles, alerts, and community messaging.</li>
            <li>Send push notifications, SMS, or email updates about pet alerts, safety tips, and service changes.</li>
            <li>Improve performance, train AI identification models, debug issues, and develop new capabilities.</li>
            <li>Protect the platform by detecting fraud, abuse, or security threats.</li>
            <li>Comply with legal obligations, resolve disputes, and enforce our Terms of Use.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. Why and When We Share Information</h2>
          <p>We do <strong>not</strong> sell personal information. We share data only when necessary:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Pet Alerts:</strong> Details you include in an alert (pet description, last location, contact method) may be viewable by other app users or anyone with the alert link.</li>
            <li><strong>Service Providers:</strong> Infrastructure, analytics, customer support, and notification vendors under contractual confidentiality.</li>
            <li><strong>Community Partners:</strong> Shelters or rescue teams you explicitly collaborate with in the App.</li>
            <li><strong>Legal & Safety:</strong> When required to comply with law, protect rights, or prevent harm.</li>
            <li><strong>Business Changes:</strong> If Rewardz is involved in a merger or acquisition, data may transfer under equivalent safeguards.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Data Retention & Controls</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>We retain data while your account remains active or as required for legal, accounting, or security purposes.</li>
            <li>You may request access, correction, export, or deletion of your personal data by contacting us.</li>
            <li>Disable push notifications, SMS, or location sharing anytime in app settings or your device preferences.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Security</h2>
          <p className="text-muted-foreground">
            We apply administrative, technical, and physical safeguards—including encryption in transit, access controls,
            routine monitoring, and secure hosting—to protect your information. No system is perfect, so please protect
            your account credentials and notify us immediately if you suspect unauthorized activity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Children’s Privacy</h2>
          <p className="text-muted-foreground">
            The Rewardz App is not intended for children under 13. We do not knowingly collect data from children.
            Parents or guardians who believe a child has provided information should contact us so we can delete it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. International Data Transfers</h2>
          <p className="text-muted-foreground">
            Rewardz stores data on servers located in the United States. Using the App means you consent to transferring
            and processing information in the U.S., subject to this Privacy Policy and applicable U.S. laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">8. Privacy Rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your
            personal data, as well as to withdraw consent or lodge a complaint with a supervisory authority. We will
            respond to verifiable requests consistent with applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">9. Policy Updates</h2>
          <p className="text-muted-foreground">
            We may modify this Privacy Policy to reflect operational, legal, or regulatory changes. When we do, we will
            update the “Effective Date” above and notify you via in-app message or email when required.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">10. Contact Us</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Rewardz Privacy Team</p>
            <p>Email: <a className="text-primary underline" href="mailto:privacy@rewardzapp.com">privacy@rewardzapp.com</a></p>
            <p>Mailing Address: 123 Pet Safety Lane, Austin, Texas 78701, USA</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

