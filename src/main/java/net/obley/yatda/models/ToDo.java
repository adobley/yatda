package net.obley.yatda.models;

public class ToDo {
  private final long id;
  private final String text;


  public ToDo(long id, String text) {
    this.id = id;
    this.text = text;
  }


  public long getId() {
    return id;
  }

  public String getText() {
    return text;
  }
}
