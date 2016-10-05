package net.obley.yatda.controllers;

import net.obley.yatda.models.ToDo;
import org.junit.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class ToDoControllerTest {

  @Test
  public void shouldReturnListOfAllToDos() throws Exception {
    ToDoController toDoController = new ToDoController();

    List<ToDo> allToDos = toDoController.getAllToDos();

    assertThat(allToDos, contains(
      hasProperty("text", is("Build a backend"))
    ));
  }
}
