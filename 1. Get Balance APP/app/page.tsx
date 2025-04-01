'use client'; // Indique que ce composant s'exécute côté client (navigateur)

// Importation des dépendances nécessaires
import {
  Connection, // Pour se connecter au réseau Solana
  PublicKey, // Pour gérer les clés publiques Solana
  LAMPORTS_PER_SOL, // Constante pour convertir les lamports en SOL
} from "@solana/web3.js";
import { useState } from "react"; // Hook React pour gérer l'état local

// Composant principal de la page
export default function Home() {
  // État pour stocker le solde en SOL (peut être null)
  const [balanceInSol, setBalanceInSol] = useState<number | null>(null);
  // État pour stocker l'adresse saisie par l'utilisateur
  const [address, setAddress] = useState("");

  // Fonction asynchrone pour récupérer le solde
  const getBalance = async () => {
    try {
      // Création d'un objet PublicKey à partir de l'adresse saisie
      // Cela valide aussi le format de l'adresse
      const publicKey = new PublicKey(address);
      
      // Création d'une connexion au réseau Solana via Alchemy
      const connection = new Connection("RPC_URL", "confirmed");
      // Récupération du solde en lamports
      const balance = await connection.getBalance(publicKey);
      // Conversion des lamports en SOL et mise à jour de l'état
      setBalanceInSol(balance / LAMPORTS_PER_SOL);
    } catch (err) {
      // En cas d'erreur, on l'affiche dans la console
      console.log(err);
      // Réinitialisation du solde à null
      setBalanceInSol(null);
    }
  }

  // Rendu du composant
  return (
    // Conteneur principal avec padding et largeur maximale
    <div className="p-4 max-w-md mx-auto">
      {/* Conteneur pour les éléments avec espacement vertical */}
      <div className="space-y-4">
        {/* Section pour l'input */}
        <div>
          {/* Label pour le champ de saisie */}
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Solana Address
          </label>
          {/* Champ de saisie pour l'adresse */}
          <input 
            type="text" 
            id="address"
            className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter a Solana address"
          />
        </div>
        
        {/* Bouton pour déclencher la recherche de solde */}
        <button 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors" 
          onClick={getBalance}
        >
          Get Balance
        </button>

        {/* Affichage du solde si disponible */}
        {balanceInSol !== null && (
          <div className="text-lg font-medium">
            Balance: {balanceInSol.toFixed(4)} SOL
          </div>
        )}
      </div>
    </div>
  );
}
