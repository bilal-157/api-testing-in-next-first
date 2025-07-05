// Correct format
export async function GET(request) {
  return Response.json({ message: 'Hello from API!' });
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({ received: data });
}