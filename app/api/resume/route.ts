import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/portfolio";

export async function GET() {
  const { href, filename } = getPortfolioData().hero.resumeDownload;

  const upstream = await fetch(href, {
    headers: {
      Accept: "application/pdf,*/*",
    },
    next: { revalidate: 300 },
  });

  if (!upstream.ok) {
    return new NextResponse("Resume could not be fetched.", { status: 502 });
  }

  const body = upstream.body;
  if (!body) {
    const buf = await upstream.arrayBuffer();
    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Type": upstream.headers.get("content-type") ?? "application/pdf",
        "Content-Disposition": `attachment; filename="${filename.replace(/"/g, "")}"`,
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
      },
    });
  }

  const headers = new Headers();
  headers.set("Content-Type", upstream.headers.get("content-type") ?? "application/pdf");
  headers.set("Content-Disposition", `attachment; filename="${filename.replace(/"/g, "")}"`);
  headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");

  return new NextResponse(body, { status: 200, headers });
}
