using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dto
{
    public class UserToRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4,ErrorMessage = "The password required 4 to 8 characters")]
        public string Password { get; set; }
    }
}