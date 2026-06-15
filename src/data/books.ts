// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

import type { BookType } from '../types';

export const books: BookType[] = [
  {
    title: 'Computer Design',
    author: 'Mr X',
    publicationYear: 2000,
  },
  {
    title: 'Computer Organization',
    author: 'Mr Y',
    publicationYear: 2023,
  },
];
