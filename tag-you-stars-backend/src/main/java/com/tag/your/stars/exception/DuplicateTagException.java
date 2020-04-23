package com.tag.your.stars.exception;

public class DuplicateTagException extends RuntimeException {

    public DuplicateTagException(final String id, final String tag) {
        super(String.format("duplicate tag[%s] in project id [%s]", tag, id));
    }
}
