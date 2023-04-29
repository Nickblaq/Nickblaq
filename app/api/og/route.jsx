import { ImageResponse } from "@vercel/og"
import { Bodoni_Moda as Moda } from 'next/font/google'
import { NextRequest } from 'next/server';
import { ogImageSchema } from "@/utils/og"

export const runtime = "edge"

const ModaFont = Moda({
  variable: "--font-moda",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '900']
})


export async function GET(req) {
  try {
    const urlParams = new URLSearchParams;
    const title = urlParams.get('title');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: 'url(https://nickblaq.xyz/og.png)',
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              fontSize: 130,
              fontFamily: ModaFont.variable,
              letterSpacing: '-0.05em',
              fontStyle: 'normal',
              color: 'white',
              lineHeight: '120px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),

      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.log('og image not working')
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}