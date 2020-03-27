import java.util.ArrayList;
import java.util.HashMap;



public class Hanabank {
    private String b;
    private int s;
    HashMap<Integer, ArrayList<String>> maps;

    public Hanabank(int s, String b){
        this.b=b;
        this.s=s;
    }

    public void getting(){
        System.out.println(b+s);
    }

    public static void main (String[] args) {
        String a = "on a pause";
        System.out.println(a);
        Hanabank obj = new Hanabank(5, "hello");
        obj.getting();
    }
}