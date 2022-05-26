using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.darede.WebAPI.Domains;
using senai.darede.WebAPI.Interfaces;
using senai.darede.WebAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.ComponentModel;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace senai.darede.WebAPI.Contexts
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class InfraestruturasController : ControllerBase
    {
        private IInfraestruturaRepository _InfraestruturaRepository { get; set; }
        private IUsuarioRepository _UsuarioRepository { get; set; }

        public InfraestruturasController()
        {
            _InfraestruturaRepository = new InfraestruturaRepository();
            _UsuarioRepository = new UsuarioRepository();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Infraestrutura infraestruturaBuscada = _InfraestruturaRepository.ListarId(id);

            if (infraestruturaBuscada == null)
            {
                return NotFound("Nenhuma Infraestrutura encontrada.");
            }

            return Ok(infraestruturaBuscada);
        }

        //[Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Post(Infraestrutura novaInfraestrutura)
        {
            _InfraestruturaRepository.Cadastrar(novaInfraestrutura);

            return StatusCode(201);
        }

        [HttpDelete("excluir/{id}")]
        public IActionResult Delete(int id)
        {
            _InfraestruturaRepository.Deletar(id);
            return StatusCode(204);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Infraestrutura infraestruturaAtualizada)
        {
            Infraestrutura infraestruturaBuscada = _InfraestruturaRepository.ListarId(id);

            if (infraestruturaBuscada == null)
            {
                return NotFound
                    (new
                    {
                        mensagem = "Infraestrutura não encontrada.",
                        erro = true
                    });
            }

            try
            {
                _InfraestruturaRepository.Atualizar(id, infraestruturaAtualizada);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpGet("InfraestruturasUsuario")] //[[[[[NAO FUNCIONAL]]]]]
        public IActionResult UserI(int id)
        {
            Usuario usuarioBuscado = _UsuarioRepository.ListarId(id);

            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_InfraestruturaRepository.MinhasInfraestruturas(id));
            }
            catch (Exception error)
            {
                return BadRequest(new
                {
                    mensagem = "Não é possível mostrar as infraestrurtuas se o usuário não estiver logado!",
                    error
                });
            }
        }

        /*[HttpGet("Infraestruturas Ativas")]
        public IActionResult InfraestruturasAtivo()
        {
            try
            {
                bool Ativo 
                if(Ativo ==true)
                    {
                    return
                }
            }
            catch
            {

            }
            
        }*/

        [HttpGet("RodarBat")]
        public IActionResult GetAction()
        {
            _InfraestruturaRepository.ExecutarBat("");
            return StatusCode(200); 
        }
    }
}
