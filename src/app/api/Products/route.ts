import { NextResponse } from "next/server";

// ** Fetch Data From Api Dummy json
export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=100" ,{cache:"no-store"});
  const data = await res.json();
  return NextResponse.json(data);
}