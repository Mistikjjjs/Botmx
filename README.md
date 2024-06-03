## Maleficent Bot

<p align="center">
<img src="https://files.catbox.moe/ku30iz.jpeg" alt="Maleficent Bot-Md" width="500"/>

 
Bagaimana mnambah fitur atau plugin baru?<br>
How to add features or new plugins ?<br>
```
export default {
   names: ['Tittle'], //Judul Kategori yang akan di tampikan di menu
   tags: ['title'], //perintah yang akan tampil di menu
   command: ['title'], //perintah untuk menjalankan plugins plugins nya
   start: async (m, { //memulai perintah dari command
      conn,
      text,
      prefix,
      command,
      User,
      Format
   }) => {
      //kode kamu or your code
   },
   limit: true, //true = 1 atau bisa kasih nilai angka
   premium: false, //true jika ingin plugins fiturnya hanya bida di akses premium user
   owner: false, // true hanya dapat di akses owner
   admin: false, // true hanya dapat di akses admin
   group: false, //true hanya dapat di akses dalam group saja
   private: false, // true hanya dapat di akses di chat pribadi
   disable: false // true jika tidak ingin di akses siapapun dan selanjut ada pada contoh plugins lain
};

```

untuk menjalankan langsung tanpa command atau event message
```
export let m = {
   start: async (m, {
      conn,
      budy,
      User,
      Format
   }) => {
       //your kode or kode kamu
   }
};
```

next learn by yourself follow plugins that they were already

## Bugs and Request Fitur
* Jika kamu menemukan bug bisa lapor ke owner dan juga request fitur
* Info Lebih Lanjut, Chat [Owner-Maleficent](https://wa.me/6283112005221)

# Requirements
* [Node.js](https://nodejs.org/en/)
* * [FFmpeg and Image magic](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)


----------
