const lastUpdated = "November 15, 2025";

const TermsOfUse = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">Legal</p>
          <h1 className="text-4xl font-bold text-primary">Terms of Service</h1>
          <p className="text-muted-foreground">
            Rules, responsibilities, and disclaimers that apply when you use Rewardz.
          </p>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By downloading or using Rewardz you agree to these Terms of Service and the Privacy Policy. Rewardz is provided as a beta service; features may change or be discontinued at any time. We may suspend or terminate access for behavior that violates law or threatens the community.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Eligibility & Accounts</h2>
          <p className="text-muted-foreground">
            Users must be 18 or older. Keep your credentials secure and notify us immediately of unauthorized use. Business and shelter accounts must have authority to represent their organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">User Content</h2>
          <p className="text-muted-foreground">
            You retain ownership of content you submit. By posting, you grant Rewardz a worldwide, royalty-free license to host and display it for operating the service. We may remove content that violates these terms.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Do not share content you lack rights to.</li>
            <li>No misleading, abusive, or fraudulent reports.</li>
            <li>We may disable accounts that repeatedly break rules.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Acceptable Use</h2>
          <p className="text-muted-foreground">
            Rewardz exists to reunite pets. You agree not to harass users, harvest personal data without consent, reverse engineer the service, or disrupt network operations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Beta Disclaimers</h2>
          <p className="text-muted-foreground">
            Because Rewardz is in beta, outages, data loss, or inaccurate AI matches may occur. The service is provided "as is" without warranties, and it does not replace professional veterinary or law-enforcement advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            Rewardz and its affiliates are not liable for indirect or consequential damages. Liability is limited to amounts you paid (if any) in the last 12 months.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Termination</h2>
          <p className="text-muted-foreground">
            You may delete your account at any time. We may suspend or terminate access for policy violations, suspected fraud, or legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Governing Law & Disputes</h2>
          <p className="text-muted-foreground">
            These terms follow the laws of the United States of America. Disputes will be resolved informally first; unresolved matters proceed to binding arbitration in the United States unless prohibited by local law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Contact</h2>
          <p className="text-muted-foreground">
            Email{" "}
            <a className="text-primary underline" href="mailto:legal@rewardz.app">
              legal@rewardz.app
            </a>
            {" "}with questions. Include your account email and a description of the issue so we can respond promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-primary">Externally Published CSAE Standards</h2>
          <p className="text-muted-foreground">
            Rewardz enforces a zero-tolerance policy for child sexual abuse and exploitation (CSAE). Our moderation and escalation procedures follow the WeProtect Global Alliance Model National Response and Google Play's CSAE program requirements. Any suspected CSAE material is immediately removed and reported to the appropriate authorities (e.g., NCMEC or local equivalents).
          </p>
          <p className="text-muted-foreground">
            Using Rewardz implies consent to emergency outreach if your report impacts community safety. Contact us if you need these terms in an accessible format.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;

