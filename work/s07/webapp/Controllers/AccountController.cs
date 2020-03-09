using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;
using System.Linq;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; }

        [HttpGet("{accountNumber}")]
        public ActionResult<IEnumerable<Account>> Get(int accountNumber)
        {
            var accounts = AccountService.GetAccounts(accountNumber);
            if(accounts.Any())
                return Ok(AccountService.GetAccounts(accountNumber));
            
            return NotFound("The account does not exist!");
        }
        

    }
}
