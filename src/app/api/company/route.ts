/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const body = await request.json();
  const data = searchParams.get('name');

  return Response.json({ data, body });
}