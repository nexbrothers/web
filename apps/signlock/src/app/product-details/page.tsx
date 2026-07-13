export default function ProductDetails() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Product Details
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Signlock redefines what it means to sign a document digitally. Traditional e-signature providers store your documents in plaintext on their servers. Signlock uses Client-Side Encryption to ensure that we never see your documents.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Core Security Architecture</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Zero-Knowledge:</strong> Documents are encrypted with a key derived from your master password before being uploaded.</li>
            <li><strong>PKI Infrastructure:</strong> Every user is issued a unique public/private keypair (RSA-4096) to cryptographically sign documents.</li>
            <li><strong>Blockchain Hashing:</strong> Audit trails are periodically hashed and anchored to a public ledger to guarantee immutability.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold">Standard</h3>
              <p className="text-4xl font-bold mt-4 mb-6">$15<span className="text-sm font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ 20 signature requests / mo</li>
                <li>✓ Basic Audit Trail</li>
                <li>✓ Email Support</li>
              </ul>
            </div>
            <div className="border border-purple-500 rounded-2xl p-8 bg-purple-50 dark:bg-purple-900/20 shadow-md relative">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">Enterprise</div>
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-4xl font-bold mt-4 mb-6">$49<span className="text-sm font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Unlimited signature requests</li>
                <li>✓ Advanced PKI Audit Trail</li>
                <li>✓ Custom Branding</li>
                <li>✓ SSO Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
