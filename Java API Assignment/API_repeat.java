import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import java.util.*;


public class API_repeat extends Application
{
   private Scene scene;
   private Label dLbl;
   private Button btn1, btn2, btn3;
   private BorderPane sceneLayout;
   private GridPane buttonPane;
  
   
   @Override
   public void start(Stage primaryStage)
   {
      sceneLayout = new BorderPane();
      buttonPane = new GridPane();
      VBox vbox = new VBox();
      vbox.getChildren().add(buttonPane);
      vbox.getChildren().add(new Label(dLbl));
      btn1 = new Button("Box1");
      btn2 = new Button("Box2");
      btn3 = new Button("Box3");
      dLbl = new Label("Good Luck");
      
      
      buttonPane.add(btn1,1,0);
      buttonPane.add(btn2,2,0);
      buttonPane.add(btn3,3,0);
      
     
      
      scene = new Scene(vbox,400,150);
      
      primaryStage.setScene(scene);
      primaryStage.setTitle("TAKE YOUR PICK"); //sets Title of the stage
      primaryStage.show(); // Displays the Stage
   }
   
   public static void main(String [] args)
   {
      Application.launch(args);
   }
}