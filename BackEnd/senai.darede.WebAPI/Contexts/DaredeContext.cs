using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using senai.darede.WebAPI.Domains;

#nullable disable

namespace senai.darede.WebAPI.Contexts
{
    public partial class DaredeContext : DbContext
    {
        public DaredeContext()
        {
        }

        public DaredeContext(DbContextOptions<DaredeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ArmInstancium> ArmInstancia { get; set; }
        public virtual DbSet<Infraestrutura> Infraestruturas { get; set; }
        public virtual DbSet<Instancium> Instancia { get; set; }
        public virtual DbSet<Software> Softwares { get; set; }
        public virtual DbSet<TipoInstancium> TipoInstancia { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Zona> Zonas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=bd-sql.c84skkh5tzze.us-east-1.rds.amazonaws.com; initial catalog=DAREDE_DB; user Id=admin; pwd=daredeg3;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<ArmInstancium>(entity =>
            {
                entity.HasKey(e => e.IdArmInstancia)
                    .HasName("PK__armInsta__6E3195AED7D2207A");

                entity.ToTable("armInstancia");

                entity.HasIndex(e => e.TipoArmInstancia, "UQ__armInsta__6968B61135AD10D2")
                    .IsUnique();

                entity.Property(e => e.IdArmInstancia)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idArmInstancia");

                entity.Property(e => e.TipoArmInstancia)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("tipoArmInstancia");
            });

            modelBuilder.Entity<Infraestrutura>(entity =>
            {
                entity.HasKey(e => e.IdInfraestrutura)
                    .HasName("PK__infraest__973745E904D803E3");

                entity.ToTable("infraestrutura");

                entity.HasIndex(e => e.IpPublico, "UQ__infraest__3A52E6DF820BDF5F")
                    .IsUnique();

                entity.HasIndex(e => e.IpPrivado, "UQ__infraest__497E8014BA63F6B1")
                    .IsUnique();

                entity.Property(e => e.IdInfraestrutura).HasColumnName("idInfraestrutura");

                entity.Property(e => e.IdInstancia).HasColumnName("idInstancia");

                entity.Property(e => e.IdSoftware).HasColumnName("idSoftware");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.IdZona).HasColumnName("idZona");

                entity.Property(e => e.IpPrivado)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipPrivado");

                entity.Property(e => e.IpPublico)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipPublico");

                entity.HasOne(d => d.IdInstanciaNavigation)
                    .WithMany(p => p.Infraestruturas)
                    .HasForeignKey(d => d.IdInstancia)
                    .HasConstraintName("FK__infraestr__idIns__4F7CD00D");

                entity.HasOne(d => d.IdSoftwareNavigation)
                    .WithMany(p => p.Infraestruturas)
                    .HasForeignKey(d => d.IdSoftware)
                    .HasConstraintName("FK__infraestr__idSof__5070F446");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Infraestruturas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__infraestr__idUsu__4E88ABD4");

                entity.HasOne(d => d.IdZonaNavigation)
                    .WithMany(p => p.Infraestruturas)
                    .HasForeignKey(d => d.IdZona)
                    .HasConstraintName("FK__infraestr__idZon__5165187F");
            });

            modelBuilder.Entity<Instancium>(entity =>
            {
                entity.HasKey(e => e.IdInstancia)
                    .HasName("PK__instanci__1D55BE1AAFCC8DF0");

                entity.ToTable("instancia");

                entity.Property(e => e.IdInstancia).HasColumnName("idInstancia");

                entity.Property(e => e.IdArmInstancia).HasColumnName("idArmInstancia");

                entity.Property(e => e.IdTipoInstancia).HasColumnName("idTipoInstancia");

                entity.Property(e => e.MemoriaGib)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("memoriaGIB");

                entity.Property(e => e.VCpu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("vCPU");

                entity.HasOne(d => d.IdArmInstanciaNavigation)
                    .WithMany(p => p.Instancia)
                    .HasForeignKey(d => d.IdArmInstancia)
                    .HasConstraintName("FK__instancia__idArm__48CFD27E");

                entity.HasOne(d => d.IdTipoInstanciaNavigation)
                    .WithMany(p => p.Instancia)
                    .HasForeignKey(d => d.IdTipoInstancia)
                    .HasConstraintName("FK__instancia__idTip__49C3F6B7");
            });

            modelBuilder.Entity<Software>(entity =>
            {
                entity.HasKey(e => e.IdSoftware)
                    .HasName("PK__software__35D1563D60B647D0");

                entity.ToTable("software");

                entity.HasIndex(e => e.NomeSoftware, "UQ__software__5BDFDAAFD0DEE74C")
                    .IsUnique();

                entity.Property(e => e.IdSoftware)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idSoftware");

                entity.Property(e => e.NomeSoftware)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nomeSoftware");
            });

            modelBuilder.Entity<TipoInstancium>(entity =>
            {
                entity.HasKey(e => e.IdTipoInstancia)
                    .HasName("PK__tipoInst__BFADCEC15B32D1A8");

                entity.ToTable("tipoInstancia");

                entity.HasIndex(e => e.NomeTipoInstancia, "UQ__tipoInst__34C948673D5AB399")
                    .IsUnique();

                entity.Property(e => e.IdTipoInstancia).HasColumnName("idTipoInstancia");

                entity.Property(e => e.NomeTipoInstancia)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false)
                    .HasColumnName("nomeTipoInstancia");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__tipoUsua__03006BFFA57AD604");

                entity.ToTable("tipoUsuario");

                entity.HasIndex(e => e.NomeTipoUsuario, "UQ__tipoUsua__A017BD9F37323AE8")
                    .IsUnique();

                entity.Property(e => e.IdTipoUsuario)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idTipoUsuario");

                entity.Property(e => e.NomeTipoUsuario)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("nomeTipoUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__645723A611F67F48");

                entity.ToTable("usuario");

                entity.HasIndex(e => e.Email, "UQ__usuario__AB6E6164DD653F47")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.NomeUsuario)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false)
                    .HasColumnName("nomeUsuario");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__usuario__idTipoU__3A81B327");
            });

            modelBuilder.Entity<Zona>(entity =>
            {
                entity.HasKey(e => e.IdZona)
                    .HasName("PK__zona__1EE4D75C113D2597");

                entity.ToTable("zona");

                entity.HasIndex(e => e.NomeZona, "UQ__zona__A49AE9CE88CDAABB")
                    .IsUnique();

                entity.Property(e => e.IdZona)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idZona");

                entity.Property(e => e.NomeZona)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("nomeZona");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
