# Instructions pour ajouter vos médias

## 📹 Vidéos YouTube

Les liens YouTube sont déjà intégrés dans le code HTML. Pour les personnaliser :

1. Ouvrez le fichier `index.html`
2. Trouvez les sections avec les clips (lignes 84-130)
3. Remplacez `VOTRE_VIDEO_ID_1`, `VOTRE_VIDEO_ID_2`, etc. par vos vrais ID de vidéos YouTube

**Exemple :**
- Si votre vidéo YouTube est : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- L'ID est : `dQw4w9WgXcQ`
- Remplacez : `href="https://www.youtube.com/watch?v=VOTRE_VIDEO_ID_1"` 
- Par : `href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"`

## 🎵 Fichiers Audio MP4

Les lecteurs audio sont déjà intégrés dans la page discographie. Pour ajouter vos musiques :

1. Placez vos fichiers audio MP4 dans le dossier : `attached_assets/audio/`
2. Les noms de fichiers attendus sont :
   - `lumieres_nocturnes.mp4` (pour l'album "Lumières Nocturnes")
   - `echos_du_silence.mp4` (pour l'album "Échos du Silence")
   - `instants_voles.mp4` (pour l'EP "Instants Volés")

3. Si vous voulez utiliser d'autres noms de fichiers, modifiez les chemins dans `music.html` :
   - Lignes 62-65 pour "Lumières Nocturnes"
   - Lignes 79-82 pour "Échos du Silence"
   - Lignes 96-99 pour "Instants Volés"

## 📝 Notes importantes

- Les formats audio supportés : MP4, MP3, OGG, WAV
- Pour MP3 : changez `type="audio/mp4"` en `type="audio/mp3"` dans le code HTML
- Les lecteurs audio apparaîtront automatiquement une fois les fichiers ajoutés au bon emplacement
