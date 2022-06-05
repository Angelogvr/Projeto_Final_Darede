using Microsoft.EntityFrameworkCore;
using senai.darede.WebAPI.Contexts;
using senai.darede.WebAPI.Domains;
using senai.darede.WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace senai.darede.WebAPI.Repositories
{
    public class InfraestruturaRepository : IInfraestruturaRepository
    {
        DaredeContext ctx = new DaredeContext();

        public void Atualizar(int idInfraestrutura, Infraestrutura infraestruturaAtualizada)
        {
            Infraestrutura infraestruturaBuscada = ListarId(idInfraestrutura);

            if (infraestruturaBuscada != null)
            {
                infraestruturaBuscada.IdInfraestrutura = infraestruturaAtualizada.IdInfraestrutura;
                infraestruturaBuscada.IdUsuario = infraestruturaAtualizada.IdUsuario;
                infraestruturaBuscada.IdInstancia = infraestruturaAtualizada.IdInstancia;
                infraestruturaBuscada.IdSoftware = infraestruturaAtualizada.IdSoftware;
                infraestruturaBuscada.IpPrivado = infraestruturaAtualizada.IpPrivado;
                infraestruturaBuscada.IpPublico = infraestruturaAtualizada.IpPublico;

            }

            ctx.Infraestruturas.Update(infraestruturaBuscada);
            ctx.SaveChanges();
        }

        public void Cadastrar(Infraestrutura novaInfraestrutura)
        {
            ctx.Infraestruturas.Add(novaInfraestrutura);
            ctx.SaveChanges();
        }

        public void Deletar(int idInfraestrutura)
        {
            Infraestrutura infraestruturaBuscada = ListarId(idInfraestrutura);

            ctx.Infraestruturas.Remove(infraestruturaBuscada);

            ctx.SaveChanges();
        }

        public Infraestrutura ListarId(int id)
        {
            return ctx.Infraestruturas.FirstOrDefault(c => c.IdInfraestrutura == id);
        }

        public List<Infraestrutura> MinhasInfraestruturas(int idUsuario)
        {
            return ctx.Infraestruturas
                .Include(p => p.IdUsuarioNavigation)
                .Where(p => p.IdUsuario == idUsuario)
                .ToList();
        }

        public void ExecutarBat(string command)
        {
            var p = new Process();
            p.StartInfo = new ProcessStartInfo(@"C:\Users\47509398894.INFOSCS\Desktop\Terraform-executar\terraform.bat")
            {
                UseShellExecute = true
            };
            p.Start();
        }

        public void EscreverArquivo(string command)
        {
            throw new NotImplementedException();
        }
    }
}
