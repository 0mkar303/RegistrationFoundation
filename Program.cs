namespace RegistrationFoundation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            // Allows ASP.NET Core to serve HTML, CSS, JS files
            app.UseStaticFiles();

            // Makes index.html load by default
            app.UseDefaultFiles();

            app.Run();

        }
    }
}
