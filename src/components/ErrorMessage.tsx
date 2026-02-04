export function ErrorMessage({
  error,
}: {
  error: Error | string | null;
}) {
  if (!error) return null;

  return (
    <div className="mb-4 rounded-md bg-red-100 p-3 text-red-600">
      {error instanceof Error ? error.message : error}
    </div>
  );
}
