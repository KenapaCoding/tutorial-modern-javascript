

# Solusi Tantangan DOM Manipulation di JavaScript

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Challenge</title>
</head>
<body>
    <input type="text" id="inputText" placeholder="Masukkan item">
    <button id="addButton">Tambah Item</button>
    <ul id="itemList"></ul>

    <script>
        document.getElementById("addButton").addEventListener("click", function() {
            const inputText = document.getElementById("inputText").value;

            if (inputText === "") return;

            // Membuat elemen li baru
            const li = document.createElement("li");
            li.textContent = inputText;

            // Membuat tombol hapus
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Hapus";
            deleteButton.addEventListener("click", function() {
                li.remove();
            });

            // Menambahkan tombol hapus ke li
            li.appendChild(deleteButton);

            // Menambahkan li ke ul
            document.getElementById("itemList").appendChild(li);

            // Mengosongkan input field
            document.getElementById("inputText").value = "";
        });
    </script>
</body>
</html>
```

## Penjelasan:
- **Membuat Elemen Baru:** Menggunakan `document.createElement()` untuk membuat elemen `li` dan `button` baru.
- **Menambahkan Event Listener:** Event listener ditambahkan ke tombol "Tambah Item" untuk menangani klik dan menambahkan item baru ke dalam daftar.
- **Menghapus Item:** Setiap item dalam daftar memiliki tombol "Hapus" yang ketika diklik akan menghapus item tersebut menggunakan metode `remove()`.