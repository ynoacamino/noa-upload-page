import Home from './Home';

export default async function Page({ searchParams }: { searchParams: { k: string } }) {
  if (searchParams.k !== process.env.SECRET_KEY) {
    return (
      <div>
        forebiden
      </div>
    );
  }

  return (
    <Home />
  );
}
