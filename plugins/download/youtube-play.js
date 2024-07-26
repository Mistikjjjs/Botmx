const fetch = require('node-fetch');
const { ytmp4, ytsearch } = require('ruhend-scraper');

exports.default = {
  // Nombres del comando
  names: ['Descargador'],
  // Etiquetas del comando
  tags: ['reproducir', 'canción', 'música'],
  // Comando
  command: ['play', 'canción', 'música'],
  // Función principal
  start: async (m, {
    conn,
    text,
    prefix,
    command,
    Format
  }) => {
    // Verificar si se ha ingresado texto
    if (!text) return m.reply(`Ingrese la canción que desea buscar\nEjemplo: ${prefix+command} papinka sana sini aku rindu o .play enlace https://youtu.be/uNkO9WWIzHE`);
    // Buscar video en YouTube
    let vid = (await ytsearch(text)).video[0]
    // Extraer información del video
    let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid;
    // Enviar título del video
    m.reply(title);
    // Verificar si se encontró el video
    if (!vid) return m.reply('No se encontró, intente invertir el título y el autor')
    // Crear enlace al video
    let url = 'http://youtu.be/' + videoId;
    // Crear mensaje de reproducción
    let play = `🎧 〔 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 〕\n`
    play += ` ${javi} *Datos encontrados*\n`
    play += ` ⬡ Título: ${title}\n`
    play += ` ⬡ Duración: ${durationH}\n`
    play += ` ⬡ Vistas: ${viewH}\n`
    play += ` ⬡ Fecha de carga: ${publishedTime}\n`
    play += ` ⬡ Enlace: ${url}\n\n`
    play += ` *Cargando audio...*`
    // Descargar audio del video
    let { video } = await ytmp4(url);
    // Convertir audio a formato mp3
    let audio = await Format.mp3v2(conn, video, 'mp4', m);
    // Enviar mensaje de reproducción y audio
    conn.adReply(m.chat, play, thumbnail, m).then(async () => {
      conn.sendFile(m.chat, audio, {
        mimetype: 'audio/mp4',
        fileName: title,
        quoted: m,
        contextInfo: {
          externalAdReply: {
            mediaType: 2,
            mediaUrl: url,
            title: title,
            body: setting.botName,
            sourceUrl: url,
            thumbnail: await (await fetch(thumbnail)).buffer()
          }
        }
      })
    })
  },
  // Límite de uso
  limit: 0,
  // Requiere premium
  premium: false
                            }
