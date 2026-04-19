import { notFound } from "next/navigation";
import type { Metadata } from "next";

const apps: Record<string, { name: string; description: string }> = {
  olive: {
    name: "Olive",
    description: "A daily Bible reading app.",
  },
  yenga: {
    name: "Yenga",
    description: "An AI-powered flashcard app.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ appName: string }>;
}): Promise<Metadata> {
  const { appName } = await params;
  const app = apps[appName.toLowerCase()];
  if (!app) return {};
  return {
    title: `${app.name} — Privacy Policy`,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ appName: string }>;
}) {
  const { appName } = await params;
  const app = apps[appName.toLowerCase()];

  if (!app) notFound();

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="text-white font-mono px-8 py-12 max-w-2xl mx-auto">
        <div className="mb-12">
          <a href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← ojflabs
          </a>
        </div>

        <div className="mb-10">
          <h1 className="text-lg font-normal">{app.name}</h1>
          <p className="text-zinc-500 text-sm mt-1">Privacy Policy</p>
          <p className="text-zinc-600 text-xs mt-1">Last updated: {today}</p>
        </div>

        <div className="space-y-8 text-sm leading-7 text-zinc-400">

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Overview</h2>
            <p>
              This privacy policy applies to the Olive app, created by Oliver Fitzgerald (the
              &ldquo;Service Provider&rdquo;) as a freemium service. Olive is a daily Bible reading
              app. The Bible content is bundled directly in the app — no account is required to
              read. This policy explains what limited data is collected and why.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Information We Collect</h2>
            <p>
              Olive collects minimal data. When you use the app, the following may be collected
              automatically:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li>— Your device&apos;s IP address</li>
              <li>— Device type, operating system, and app version</li>
              <li>— Time spent in the app and pages visited (for crash reporting and improvement)</li>
            </ul>
            <p className="mt-3">
              Olive does not collect precise location data. Olive does not use AI to process your
              personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">In-App Purchases</h2>
            <p>
              Olive offers optional premium features via in-app purchase. Purchases are handled
              entirely by RevenueCat and the App Store. The Service Provider does not store your
              payment information. RevenueCat may collect purchase history and subscription status
              to manage your access.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Third Parties</h2>
            <p>
              Olive uses the following third-party services, each with their own privacy policy:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li>
                —{" "}
                <a
                  href="https://expo.dev/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-zinc-300 hover:text-white transition-colors"
                >
                  Expo
                </a>
                {" "}(app framework and build infrastructure)
              </li>
              <li>
                —{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-zinc-300 hover:text-white transition-colors"
                >
                  RevenueCat
                </a>
                {" "}(in-app purchase management)
              </li>
            </ul>
            <p className="mt-3">
              The Service Provider does not share your data with any other third parties.
              Data may be disclosed if required by law or to protect the rights and safety of users.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Opt-Out</h2>
            <p>
              You can stop all data collection by uninstalling the app at any time using your
              device&apos;s standard uninstall process.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Data Retention</h2>
            <p>
              Any data collected is retained for as long as you use the app and for a reasonable
              period thereafter. To request deletion of your data, contact us at the address below
              and we will respond promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Children</h2>
            <p>
              Olive is not directed at children under 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided personal
              information, please contact us and we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Security</h2>
            <p>
              The Service Provider takes reasonable steps to protect your information using physical,
              electronic, and procedural safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Changes</h2>
            <p>
              This policy may be updated from time to time. Changes will be reflected on this page
              with an updated date. Continued use of the app constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Your Consent</h2>
            <p>
              By using Olive, you consent to the collection and use of information as described
              in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-600 mb-3">Contact</h2>
            <p>
              Questions about this policy? Reach out at{" "}
              <a
                href="mailto:olifitz1610@gmail.com"
                className="underline underline-offset-4 text-zinc-300 hover:text-white transition-colors"
              >
                olifitz1610@gmail.com
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
