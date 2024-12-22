'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ERPIntegration() {
  const [selectedERP, setSelectedERP] = useState<string | null>(null)
  const [optimizationResult, setOptimizationResult] = useState<string | null>(null)

  const handleOptimization = async () => {
    // In a real application, this would call a server action or API endpoint
    // to perform the actual ERP integration optimization
    setOptimizationResult(`${selectedERP} integration optimized successfully`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ERP Integration Optimization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setSelectedERP}>
            <SelectTrigger>
              <SelectValue placeholder="Select ERP system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sap">SAP</SelectItem>
              <SelectItem value="oracle">Oracle</SelectItem>
              <SelectItem value="microsoft">Microsoft Dynamics</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleOptimization} disabled={!selectedERP}>
            Optimize Integration
          </Button>
          {optimizationResult && <p className="mt-4">{optimizationResult}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

