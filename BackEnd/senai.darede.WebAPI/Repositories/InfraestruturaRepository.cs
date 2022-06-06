using Microsoft.EntityFrameworkCore;
using senai.darede.WebAPI.Contexts;
using senai.darede.WebAPI.Domains;
using senai.darede.WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
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

            var last = ctx.Infraestruturas.OrderByDescending(c => c.IdInfraestrutura).First();

            StreamWriter sw = new StreamWriter(@"C:\Users\47509398894.INFOSCS\Desktop\Terraform-executar\terraform.bats");

            try
            {

                sw.WriteLine("provider  \"aws\"{");

                switch (last.IdZona)
                {
                    case 1:
                        sw.WriteLine("region =  \"us-east-1\""
                    );
                        //Fechamento da chave do provedor e região
                        sw.WriteLine("}");
                        break;
                    case 2:
                        sw.WriteLine("region =  \"us-west-1\""
                    );
                        //Fechamento da chave do provedor e região
                        sw.WriteLine("}");
                        break;
                    default:
                        Console.WriteLine("abacate");
                        break;
                }

                sw.WriteLine("resource aws_instance by_grupo_3 {");

                switch (last.IdSoftware)
                {
                    case 1:
                        sw.WriteLine("ami = \"ami-0022f774911c1d690\"");
                        break;
                    case 2:
                        sw.WriteLine("ami = \"ami-033594f8862b03bb2\"");
                        break;
                    default:
                        Console.WriteLine("abacate");
                        break;
                }

                switch (last.IdInstancia)
                {
                    case 1:
                    sw.WriteLine("instance_type = \"t2.micro\""
                    );
                        break;
                    case 2:
                    sw.WriteLine("instance_type = \"c4.xlarge\""
                    );
                    break;
                }

                sw.WriteLine("}");

                sw.Close();

            }
            catch 
            {
                sw.WriteLine("abacate");
                sw.Close();
            }
        }
    }
}
