// app/mon-module/loading.tsx
export default function Loading() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg animate-pulse">
      <div className="h-8 w-1/2 bg-gray-200 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="mt-6 h-10 w-24 bg-gray-300 rounded">
        Loading...
      </div>
    </div>
  )
}
 