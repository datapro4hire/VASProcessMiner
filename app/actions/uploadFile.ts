'use server'

import { put } from '@vercel/blob'

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File
  if (!file) {
    throw new Error('No file uploaded')
  }

  try {
    const blob = await put(file.name, file, { access: 'public' })
    return `File uploaded successfully. URL: ${blob.url}`
  } catch (error) {
    console.error('Upload error:', error)
    throw new Error('File upload failed')
  }
}

