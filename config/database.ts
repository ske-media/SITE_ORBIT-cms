// Importation de path si nécessaire pour Strapi
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    // Type de base de données
    client: 'postgres', 
    
    // Paramètres de connexion à Supabase
    connection: {
      host: env('DATABASE_HOST', 'aws-0-eu-west-3.pooler.supabase.com'), // Hôte de la base de données
      port: env.int('DATABASE_PORT', 5432), // Port de connexion
      database: env('DATABASE_NAME', 'postgres'), // Nom de la base de données
      user: env('DATABASE_USERNAME', 'postgres.uebuanabmokxyvwhuzny'), // Utilisateur
      password: env('DATABASE_PASSWORD', 'M5MpUdwhqRvAkFw3ZMEYwxydRPus66hva99hM'), // Mot de passe
      ssl: {
        rejectUnauthorized: false, // Retirer cette option si elle n'est pas nécessaire
      },
    },
    debug: false, // Désactive le mode de débogage
  },
});