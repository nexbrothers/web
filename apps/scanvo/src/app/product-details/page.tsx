export default function ProductDetails() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Product Details
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Scanvo is engineered to be the most advanced document digitizer on the market. With support for over 50 languages using our proprietary OCR (Optical Character Recognition) engine, Scanvo seamlessly translates physical documents into searchable, editable digital formats.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Technical Specifications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>OCR Engine:</strong> Deep learning based, 99.8% accuracy.</li>
            <li><strong>Export Formats:</strong> PDF, DOCX, TXT, JPG, PNG.</li>
            <li><strong>Cloud Sync:</strong> Real-time syncing across iOS, Android, and Web.</li>
            <li><strong>Security:</strong> AES-256 bit encryption at rest and TLS 1.3 in transit.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-sm">
              <h3 className="text-xl font-bold">Free Tier</h3>
              <p className="text-4xl font-bold mt-4 mb-6">$0<span className="text-sm font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ 50 scans per month</li>
                <li>✓ Basic OCR</li>
                <li>✓ Standard Export (PDF)</li>
              </ul>
            </div>
            <div className="border border-blue-500 rounded-2xl p-8 bg-blue-50 dark:bg-blue-900/20 shadow-md relative">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">Popular</div>
              <h3 className="text-xl font-bold">Pro Tier</h3>
              <p className="text-4xl font-bold mt-4 mb-6">$9.99<span className="text-sm font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Unlimited scans</li>
                <li>✓ Advanced AI OCR</li>
                <li>✓ All Export formats</li>
                <li>✓ Cloud Storage Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
