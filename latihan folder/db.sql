create table mahasiswa(
    nim INT(10) PRIMARY KEY,
    nama char(255) NOT NULL,
    prodi CHAR(255) NOT NULL,
    jenisKelamin enum('Laki-laki', 'perempuan'),
    alamat TEXT NOT NULL,
    noHp CHAR(25)
);

INSERT INTO mahasiswa()
VALUES ("Tri Agil", 12345, "TIK", "Laki-laki", "samarinda", "081234567890");

INSERT INTO mahasiswa()
VALUES ("1234", "Tri Agil", "TIK", "Laki-laki", "samarinda", "081234567890");
