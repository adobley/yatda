package net.obley.yatda.controllers;

import net.obley.yatda.models.ToDo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToDoController {

  @RequestMapping("/todos")
  public List<ToDo> getAllToDos() {
    ArrayList<ToDo> toDos = new ArrayList<ToDo>();
    toDos.add(new ToDo(1, "Build a backend"));
    return toDos;
  }

}
