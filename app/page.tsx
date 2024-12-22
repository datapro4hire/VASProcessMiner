import FileUpload from './components/FileUpload'
import ProcessMining from './components/ProcessMining'
import ERPIntegration from './components/ERPIntegration'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Process Miner</h1>
      <div className="space-y-8">
        <FileUpload />
        <ProcessMining />
        <ERPIntegration />
      </div>
    </main>
  )
}

