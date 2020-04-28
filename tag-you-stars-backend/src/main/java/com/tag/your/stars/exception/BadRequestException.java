package com.tag.your.stars.exception;

public class BadRequestException extends RuntimeException {
    public BadRequestException(final String s) {
        super(s);
    }
}
