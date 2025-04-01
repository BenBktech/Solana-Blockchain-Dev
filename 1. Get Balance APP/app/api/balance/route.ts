import { NextResponse } from 'next/server';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export async function POST(request: Request) {
  try {
    const { address } = await request.json();
    
    if (!address) {
      return NextResponse.json({ error: "Address is required" }, { status: 400 });
    }

    const publicKey = new PublicKey(address);
    const connection = new Connection(process.env.RPC_URL || "", "confirmed");
    const balance = await connection.getBalance(publicKey);
    
    return NextResponse.json({ 
      balance: balance / LAMPORTS_PER_SOL 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
} 