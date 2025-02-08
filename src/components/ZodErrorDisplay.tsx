type Props = {
  error: string[] | null;
};

export default function ZodErrorDisplay({ error }: Props) {
  return (
    error &&
    error.length > 0 && (
      <div className="p-2 rounded-md text-red-500 -mt-10 text-sm">
        <ul>
          {error.map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      </div>
    )
  );
}
