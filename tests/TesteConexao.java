import java.sql.Connection;
import java.sql.DriverManager;

public class TesteConexao {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/techsolution_vendas";
        String user = "techsoladm"; // Substitua pelo seu usuário
        String password = "champl00"; // Substitua pela sua senha
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Conexão bem-sucedida!");
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}