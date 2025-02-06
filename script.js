// Menambahkan event listener untuk setiap anggota tim
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('click', function() {
    // Toggle class active saat foto anggota diklik
    this.classList.toggle('active');
  });
});


