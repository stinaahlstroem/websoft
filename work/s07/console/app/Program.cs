using System;
using System.Linq;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = MainMenu();
            }
        }

        private static bool MainMenu()
        {
            Console.Clear();
            Console.WriteLine("Choose an option:");
            Console.WriteLine("1) View accounts");
            Console.WriteLine("2) View account by number");
            Console.WriteLine("3) Exit");
            Console.Write("\r\nSelect an option: ");
         
            switch (Console.ReadLine())
            {
                case "1":
                    ShowAccounts();
                    return true;
                case "2":
                    ShowAccount();
                    return true;
                case "3":
                    return false;
                default:
                    return true;
            }
        }
        private static void ShowAccounts() {
            var accounts=JsonBank.ReadAccounts();
            PrintAccountsTable(accounts);
        }

        private static void PrintAccountsTable(IEnumerable<Account> accounts){
            
            string line = new String('-',10);
            Console.WriteLine("+{0}+{1}+{2}+{3}+",line,line,line,line);
            Console.WriteLine("|{0,-10}|{1,-10}|{2,-10}|{3,-10}|","Number","Balance","Label","Owner");
            
            Console.WriteLine("+{0}+{1}+{2}+{3}+",line,line,line,line);

            foreach(var account in accounts) {
                Console.WriteLine("|{0,-10}|{1,-10}|{2,-10}|{3,-10}|", account.Number, account.Balance, account.Label, account.Owner);
                Console.WriteLine("+{0}+{1}+{2}+{3}+",line,line,line,line);
            }
            Console.Write("Press Enter to return to Main Menu");
            Console.ReadLine();
        }

        private static void ShowAccount() {
            var accountNbr = CaptureInput();
            var accounts=JsonBank.ReadAccounts();
            var matchedAccounts = accounts.Where(acc => acc.Number.ToString() == accountNbr);
            if(!matchedAccounts.Any()){
                Console.WriteLine("The account number does not exist!");
                Console.Write("Press Enter to return to Main Menu");
                Console.ReadLine();
                return;
            }

            PrintAccountsTable(matchedAccounts);

        }

        private static string CaptureInput()
        {
            Console.Write("Enter the account number: ");
            return Console.ReadLine();
        }
    
        
    }
}
