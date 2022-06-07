using System;
using System.Collections.Generic;

#nullable disable

namespace senai.darede.WebAPI.Domains
{
    public partial class Infraestrutura
    {
        public int IdInfraestrutura { get; set; }
        public int? IdUsuario { get; set; }
        public short? IdInstancia { get; set; }
        public byte? IdSoftware { get; set; }
        public byte? IdZona { get; set; }

        public virtual Instancium IdInstanciaNavigation { get; set; }
        public virtual Software IdSoftwareNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual Zona IdZonaNavigation { get; set; }
    }
}
