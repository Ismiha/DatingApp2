using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        private readonly DbContextOptions _context;
        public DataContext(DbContextOptions<DataContext> options) :base(options) {}               

        public DbSet<Value> Values { get; set; }
        
    }
}